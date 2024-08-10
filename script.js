
  
var tl = gsap.timeline({scrollTrigger:{
    trigger:"#about",
    // markers:true,
    start:"50% 50%",
    end:"90% 10%",
    pin:true,
    scrub:1

}})
tl.to("#top",{
    top:"-50%"
},"a")
tl.to("#bottom",{
    bottom:"-50%",
    // opacity:0
},"a")
tl.to("#page3",{
    y:-450
},"a")

tl.to("#top-h",{
    top:'90%'
},"a")
tl.to("#bottom-h",{
    bottom:'-60%'
},"a")
function cursorAnimation() {
    Shery.mouseFollower(
        {
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    }
);
  }
  cursorAnimation();
  Shery.makeMagnet("#center-nav a , #para p,#scroll i" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
