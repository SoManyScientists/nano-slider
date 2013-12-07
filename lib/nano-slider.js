
var Slider = function(el, options) {
  var self = this;

  this.container = el.find('ul');
  this.slides = el.find('.slide');
  this.slideWidth = this.slides.first().outerWidth();
  this.slidenumber=0;
  console.log(this.slideWidth);

  el.find('button[data-action="next"]').on('click', function(){
    if(self.slidenumber>=self.slides.length-1){
      return false;
    }
    self.container.animate({
      marginLeft: '-=' + self.slideWidth
    }, options.speed, function(){
      self.slidenumber++;
      console.log(self.slidenumber);  
    });
  });

  el.find('button[data-action="prev"]').on('click', function(){
    if(self.slidenumber<=0){
      return false;
    }
    self.container.animate({
      marginLeft: '+=' + self.slideWidth
    }, options.speed, function(){
      self.slidenumber--;
      console.log(self.slidenumber);  
    });
  });
};

var awesomeslider = new Slider($('#slider'), {
  speed: 1000
});

console.log(awesomeslider.slides);
