<?php
echo"<img src='".$Projectdir."/thumb.jpg' style='width:30%;'></img>";
echo"A pwm control software for use with the 7inch official raspberry pi touch screen.
I put this together to control the speed of the fans in my server rack. The fans are on a 12v supply, and I connected the individual signal inputs using an array of optocouplers I built.
Every time the software pulses the gpio pin on one of the optocouplers it connects the signal pwm pin from one of the fans to the 12v ground. ";

?>