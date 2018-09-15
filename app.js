import xesto from "xesto-wave-npm"
const client = xesto("205fc77314df4fa3945031cbddf27618");

client.connect().then( controller => {
  //This is a Leap.Controller object, and we can pass it gesture names to have
  //our app react to gestures!

  controller.on("Hello", () => {
    console.log("Woo! Working!");
  });

  controller.connect();
})