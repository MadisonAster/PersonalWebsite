pc.extend(pc,function(){
    var DofEffect = function(graphicsDevice){
        this.needsDepthBuffer = true;
        
        var attributes = {
            aPosition:pc.SEMANTIC_POSITION
        };
        
        var passThroughVert = [
            "attribute vec2 aPosition;",
            "",
            "varying vec2 vUv0;",
            "",
            "void main(void)",
            "{",
            "    gl_Position = vec4(aPosition, 0.0, 1.0);",
            "    vUv0 = (aPosition.xy + 1.0) * 0.5;",
            "}"
        ].join("\n");
        
        var computeDepthBlur = [
            "precision " + graphicsDevice.precision + " float;",
            "",
            "uniform sampler2D uColorBuffer;",
            "uniform sampler2D uDepthBuffer;",
            "uniform float uFocus;",
            "uniform float uNear;",
            "uniform float uFar;",
            "uniform float uClampFar;",
            "",
            "varying vec2 vUv0;",
            "",
            "float unpackFloat(vec4 rgbaDepth) {",
            "    const vec4 bitShift = vec4(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);",
            "    return dot(rgbaDepth, bitShift);",
            "}",
            "",
            "void main() {",
                "float f;",
                "vec4 packedDepth = texture2D(uDepthBuffer, vUv0);",
                "float depth = unpackFloat(packedDepth);",
                //"depth = (1.0 - depth);",
                "if (depth < uFocus)",
                "{",
                // scale depth value between near blur distance
                // and focal distance to [-1, 0] range
                "   f = (depth - uFocus) / (uFocus - uNear);",
                "}",
                "else",
                "{",
                // scale depth value between focal distance and far
                // blur distance to [0, 1] range
                "   f = (depth - uFocus) / (uFar - uFocus);",
                // clamp the far blur to a max bluriness
                "   f = clamp(f, 0.0, uClampFar);",
                "}",
                "",
                // scale and bias into [0, 1] range
                "f = f * 0.5 + 0.5;",
                "",
                "gl_FragColor = vec4(texture2D(uColorBuffer, vUv0).rgb,f);",
            "}"
        ].join("\n");
        
        // Pixel shader applies a one dimensional gaussian blur filter.
        // This is used twice by the bloom postprocess, first to
        // blur horizontally, and then again to blur vertically.
        var blurXFrag = [
            "precision " + graphicsDevice.precision + " float;",
            "varying vec2 vUv0;",
            "uniform float uBlur;",
            "uniform sampler2D uColorBuffer;",
            "",
            "void main(void) {",
            "   vec4 sum = vec4(0.0);",
            "",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x - 4.0 * uBlur, vUv0.y)) * 0.05;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x - 3.0 * uBlur, vUv0.y)) * 0.09;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x - 2.0 * uBlur, vUv0.y)) * 0.12;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x - uBlur, vUv0.y)) * 0.15;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y)) * 0.16;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x + uBlur, vUv0.y)) * 0.15;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x + 2.0 * uBlur, vUv0.y)) * 0.12;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x + 3.0 * uBlur, vUv0.y)) * 0.09;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x + 4.0 * uBlur, vUv0.y)) * 0.05;",
            "",
            "   gl_FragColor = sum;",
            "}"
        ].join("\n");
        
        var blurYFrag = [
            "precision " + graphicsDevice.precision + " float;",
            "varying vec2 vUv0;",
            "uniform float uBlur;",
            "uniform sampler2D uColorBuffer;",
            "",
            "void main(void) {",
            "   vec4 sum = vec4(0.0);",
            "",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y - 4.0 * uBlur)) * 0.05;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y - 3.0 * uBlur)) * 0.09;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y - 2.0 * uBlur)) * 0.12;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y - uBlur)) * 0.15;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y)) * 0.16;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y + uBlur)) * 0.15;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y + 2.0 * uBlur)) * 0.12;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y + 3.0 * uBlur)) * 0.09;",
            "   sum += texture2D(uColorBuffer, vec2(vUv0.x, vUv0.y + 4.0 * uBlur)) * 0.05;",
            "",
            "   gl_FragColor = sum;",
            "}"
        ].join("\n");
        
        var dofFrag = [
            "precision " + graphicsDevice.precision + " float;",
            "varying vec2 vUv0;",
            "uniform sampler2D uColorBuffer;",
            "uniform sampler2D uColorBufferBlurred;",
            "uniform vec2 uPixelSizeHigh;",
            "uniform vec2 uPixelSizeLow;",
            "",
            "void main(void) {",
            // maximum CoC radius and diameter in pixels
            "   vec2 maxCoc = vec2(5.0, 10.0);",
            // scale factor for max CoC size on low res
            "   float radiusScale = 0.4;",
            "   vec4 cOut = texture2D(uColorBuffer, vUv0);",
            "   float centerDepth = cOut.a;",
            "   float discRadius = abs(centerDepth * maxCoc.y - maxCoc.x);",
            "   float discRadiusLow = discRadius * radiusScale;",
            "   vec2 poisson[8];",
            "   poisson[0] = vec2(0.0, 0.0);",
            "   poisson[1] = vec2(0.527837, -0.085868);",
            "   poisson[2] = vec2(-0.040088, 0.536087);",
            "   poisson[3] = vec2(-0.670445, -0.179949);",
            "   poisson[4] = vec2(-0.419418, -0.616039);",
            "   poisson[5] = vec2(0.440453, -0.639399);",
            "   poisson[6] = vec2(-0.757088, 0.349334);",
            "   poisson[7] = vec2(0.574619, 0.685879);",
            "   cOut = vec4(0.0);",
            "   for (int t=0; t<8; t++) {",
            "      vec2 coordLow = vUv0 + (uPixelSizeLow * poisson[t] * discRadiusLow);",
            "      vec4 tapLow = texture2D(uColorBufferBlurred, coordLow);",
            "      vec2 coordHigh = vUv0 + (uPixelSizeHigh * poisson[t] * discRadius);",
            "      vec4 tapHigh = texture2D(uColorBuffer, coordHigh);",
            "      float tapBlur = abs(tapHigh.a * 2.0 - 1.0);",
            "      vec4 tap = mix(tapHigh, tapLow, tapBlur);",
            "      tap.a = (tap.a >= centerDepth) ? 1.0 : abs(tap.a * 2.0 - 1.0);",
            "      cOut.rgb += tap.rgb * tap.a;",
            "      cOut.a += tap.a;",
            "   }",
            "   gl_FragColor = cOut / cOut.a;",
            "}"
        ].join("\n");

        // Render targets
        var width = graphicsDevice.width;
        var height = graphicsDevice.height;
        this.targets = [
            this.createRenderTarget(graphicsDevice, width, height),
            // TODO: We should be downsamping the original image to 1/4 using a 4x4 box filter. 
            this.createRenderTarget(graphicsDevice, width, height),
            this.createRenderTarget(graphicsDevice, width, height)
        ];

        // shaders
        this.blurXShader = new pc.gfx.Shader(graphicsDevice, {
            attributes: attributes,
            vshader: passThroughVert,
            fshader: blurXFrag
        });
        this.blurYShader = new pc.gfx.Shader(graphicsDevice, {
            attributes: attributes,
            vshader: passThroughVert,
            fshader: blurYFrag
        });
        this.shader = new pc.gfx.Shader(graphicsDevice, {
            attributes: attributes,
            vshader: passThroughVert,
            fshader: computeDepthBlur
        });
        this.dofShader = new pc.gfx.Shader(graphicsDevice, {
            attributes: attributes,
            vshader: passThroughVert,
            fshader: dofFrag
        });

        // Effect defaults
        this.focus = 0.1;
        this.near = 9;
        this.far = 0.5;
        this.clampFar = 1;
        this.viewportSize = 997;
        this.blurAmount = 1/256;
        this.pixelSize = [1/graphicsDevice.width, 1/graphicsDevice.height];
        this.pixelSizeLow = [1/graphicsDevice.width, 1/graphicsDevice.height];
    };
    DofEffect = pc.inherits(DofEffect, pc.PostEffect);
    DofEffect.prototype = pc.extend(DofEffect.prototype, {
        
        createRenderTarget:function(graphicsDevice,t,r){
            var colorBuffer = new pc.gfx.Texture(graphicsDevice,{
                format:pc.gfx.PIXELFORMAT_R8_G8_B8_A8,
                width:t,
                height:r
            });
            colorBuffer.minFilter = pc.gfx.FILTER_LINEAR;
            colorBuffer.magFilter = pc.gfx.FILTER_LINEAR;
            colorBuffer.addressU = pc.gfx.ADDRESS_CLAMP_TO_EDGE;
            colorBuffer.addressV = pc.gfx.ADDRESS_CLAMP_TO_EDGE;
            return new pc.gfx.RenderTarget(graphicsDevice, colorBuffer, { depth: false });
        },
        render:function(inputTarget,outputTarget,rect){
            var device = this.device,
            scope = device.scope;
            
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);
            scope.resolve("uDepthBuffer").setValue(this.depthMap);
            scope.resolve("uFocus").setValue(this.focus);
            scope.resolve("uNear").setValue(this.near);
            scope.resolve("uFar").setValue(this.far);
            scope.resolve("uClampFar").setValue(this.clampFar);
            pc.posteffect.drawFullscreenQuad(device, this.targets[0], this.vertexBuffer, this.shader, rect);
            
            scope.resolve("uBlur").setValue(this.blurAmount);
            scope.resolve("uColorBuffer").setValue(this.targets[0].colorBuffer);
            pc.posteffect.drawFullscreenQuad(device, this.targets[1], this.vertexBuffer, this.blurXShader, rect);
            
            scope.resolve("uColorBuffer").setValue(this.targets[1].colorBuffer);
            pc.posteffect.drawFullscreenQuad(device, this.targets[2], this.vertexBuffer, this.blurYShader, rect);
            
            scope.resolve("uColorBuffer").setValue(this.targets[0].colorBuffer);
            scope.resolve("uColorBufferBlurred").setValue(this.targets[2].colorBuffer);
            scope.resolve("uPixelSizeHigh").setValue(this.pixelSize);
            scope.resolve("uPixelSizeLow").setValue(this.pixelSizeLow);
            pc.posteffect.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.dofShader, rect);
        }
    });
    
    return {
        DofEffect: DofEffect
    };
}());

//--------------- SCRIPT DEFINITION------------------------//
var Dof = pc.createScript('dof');

Dof.attributes.add('focus', {
    type: 'number',
    default: 1,
    min: 0,
    max: 1,
    precision: 5,
    step:0.5,
    title: 'Focus'
});

Dof.attributes.add('near', {
    type: 'number',
    default: 0,
    min: 0,
    max: 100,
    precision: 5,
    step:0.5,
    title: 'Near'
});

Dof.attributes.add('far', {
    type: 'number',
    default: 50,
    min: 0,
    max: 1000,
    precision: 5,
    step:0.5,
    title: 'Far'
});

Dof.attributes.add('clampFar', {
    type: 'number',
    default: 1,
    min: 0,
    max: 1,
    precision: 0.01,
    step:0.01,
    title: 'ClampFar'
});

Dof.prototype.makePercentage = function(value){
    var result = (value - this.entity.camera.nearClip) / (this.entity.camera.farClip - this.entity.camera.nearClip);
    return pc.math.clamp(result,0,1);
};
Dof.prototype.reset = function(){
    this.effect.focus=this.makePercentage(this.focus);
    this.effect.near=this.makePercentage(this.near);
    this.effect.far=this.makePercentage(this.far);
    this.effect.clampFar=this.clampFar;
};
Dof.prototype.onAttributeChanged = function(name,value){
    if (name != 'clampFar') {
        value = this.makePercentage(value);
    }
    this.effect[name] = value;
};

// initialize code called once per entity
Dof.prototype.initialize=function(){
    this.effect = new pc.DofEffect(this.app.graphicsDevice);
    this.effect.focus = this.makePercentage(this.focus);
    this.effect.near = this.makePercentage(this.near);
    this.effect.far = this.makePercentage(this.far);
    this.effect.clampFar = this.clampFar;
    
    this.on("set",this.onAttributeChanged,this);
    this.entity.camera.on("set_nearClip", this.reset, this);
    this.entity.camera.on("set_farClip", this.reset, this);
    this.reset();
    
    var queue = this.entity.camera.postEffects;
    queue.addEffect(this.effect);
    
    this.on('state', function (enabled) {
        if (enabled) {
            queue.addEffect(this.effect);
        } else {
            queue.removeEffect(this.effect);
        }
    });

    this.on('destroy', function () {
        queue.removeEffect(this.effect);
    });
};