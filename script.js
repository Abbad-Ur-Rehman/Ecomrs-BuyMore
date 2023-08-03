
var tl = gsap.timeline();
tl.from('#navbar',{
    opacity:0,
    x:-90,
    duration:.5
    
})

tl.from('#top-search-content',{
    opacity:0,
    y:-40,
    duration:0.5,

})
tl.from('#img1',{
    opacity:0,
    x:-40,
    duration:.2,
})
tl.from('.img2',{
    opacity:0,
    x:-40,
    duration:.2
});
tl.from('.img3',{
    opacity:0,
    x:-40,
    duration:.2
});
tl.from('.img4',{
    opacity:0,
    x:-40,
    duration:.2
});
tl.from('.r-img1',{
    opacity:0,
    x:-40,
    duration:.2
});
tl.from('.r-img2',{
    opacity:0,
    x:-40,
    duration:.2
});
tl.from('.r-img3',{
    opacity:0,
    x:-40,
    duration:.2
});
tl.from('.r-img4',{
    opacity:0,
    x:-40,
    duration:.2
});

gsap.from('.sellers',{
    opacity:0,
    x:-30,
    scrollTrigger: {
        trigger:'.sellers',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:"top 20%",
        scrub:true
    }
})



gsap.from('.owl-carousel ',{
    opacity:0,
    x:-30,
    scrollTrigger: {
        trigger:'.sellers',
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:"top 20%",
        scrub:true
    }
})





































$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay : true,
    autoplayHoverPause:true,
    autoplayTimeout: 1900,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})