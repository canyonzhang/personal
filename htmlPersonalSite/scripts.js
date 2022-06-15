const TweenMax = window.TweenMax;
const TimelineMax = window.TimelineMax;
const ScrollMagic = window.ScrollMagic;

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.controller();

tl.from("profile", .5 {y:200, opacity:0}); // transition the profile picture from 200 pixels on the y-axis

//creating the scrolling science
const scene = new ScrollMagic.scene({
triggerElement: ".img",
triggerHook: "onLeave", //specific to scroll magic API, makes sure that the scene is responsive to scrolling and not time
duration: "100%"
})

.setPin(".intro")
.setTween(tl)
.addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}
