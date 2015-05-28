# sphero-thebutton
Changes colors of a Sphero based on reddit's "the button" timer

<h3>Dependencies</h3>
<a href="http://nodejs.org">Node.js</a>,<br>
<a href="http://cylonjs.com/documentation/platforms/sphero/"> Cylon and cylon-sphero </a>

<h3>Use</h3>
Connect to the Sphero via bluetooth


In line 3:
<code>
var ws = new WebSocket("wss://wss.redditmedia.com/thebutton?h=\<id\>");
</code>
Replace \<id\> with the id found in <br>
Chrome Dev Console > Network tab > filter by 'WebSockets' > reload<br>
(something like <code>90332d40398a978ad8770389846e55edc0be2a3f&e=1432859107</code>)

In line 27, replace the port with the virtual serial port your Sphero is connected to

Run with <code>node thebutton_sphero.js</code>
