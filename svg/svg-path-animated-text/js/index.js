(function() {
  var charParts, i, j, len, part, partElem, resize;

  charParts = ["d-1", "d-2", "e-1", "e-2", "s-1", "i-1", "i-2", "g-1", "g-2", "n-1", "n-2"];

  partElem = $("path");

  for (j = 0, len = charParts.length; j < len; j++) {
    part = charParts[j];
    $("svg").append(partElem.clone().attr("class", part));
  }

  i = setInterval(function() {
    return $("div").toggleClass("text");
  }, 7000);

  setTimeout(function() {
    return $("div").toggleClass("text");
  }, 100);

  $("div").click(function() {
    clearInterval(i);
    return $("div").toggleClass("text");
  });

  resize = function() {
    return $("body").css({
      "margin-top": ~~((window.innerHeight - 400) / 2) + "px"
    });
  };

  $(window).resize(resize);

  resize();

  //get the line lengths
//$("path").each (i) -> console.log @getTotalLength()

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFNBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsUUFBQSxFQUFBOztFQUFBLFNBQUEsR0FBWSxDQUNWLEtBRFUsRUFFVixLQUZVLEVBR1YsS0FIVSxFQUlWLEtBSlUsRUFLVixLQUxVLEVBTVYsS0FOVSxFQU9WLEtBUFUsRUFRVixLQVJVLEVBU1YsS0FUVSxFQVVWLEtBVlUsRUFXVixLQVhVOztFQWNaLFFBQUEsR0FBVyxDQUFBLENBQUUsTUFBRjs7RUFDWCxLQUFBLDJDQUFBOztJQUNFLENBQUEsQ0FBRSxLQUFGLENBQVEsQ0FBQyxNQUFULENBQWdCLFFBQVEsQ0FBQyxLQUFULENBQUEsQ0FBZ0IsQ0FBQyxJQUFqQixDQUFzQixPQUF0QixFQUErQixJQUEvQixDQUFoQjtFQURGOztFQUdBLENBQUEsR0FBSSxXQUFBLENBQVksUUFBQSxDQUFBLENBQUE7V0FDZCxDQUFBLENBQUUsS0FBRixDQUFRLENBQUMsV0FBVCxDQUFxQixNQUFyQjtFQURjLENBQVosRUFFRixJQUZFOztFQUlKLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTtXQUNULENBQUEsQ0FBRSxLQUFGLENBQVEsQ0FBQyxXQUFULENBQXFCLE1BQXJCO0VBRFMsQ0FBWCxFQUVFLEdBRkY7O0VBSUEsQ0FBQSxDQUFFLEtBQUYsQ0FBUSxDQUFDLEtBQVQsQ0FBZSxRQUFBLENBQUEsQ0FBQTtJQUNiLGFBQUEsQ0FBYyxDQUFkO1dBQ0EsQ0FBQSxDQUFFLEtBQUYsQ0FBUSxDQUFDLFdBQVQsQ0FBcUIsTUFBckI7RUFGYSxDQUFmOztFQUlBLE1BQUEsR0FBUyxRQUFBLENBQUEsQ0FBQTtXQUNQLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxHQUFWLENBQ0U7TUFBQSxZQUFBLEVBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBUCxHQUFxQixHQUF0QixDQUFBLEdBQTZCLENBQTlCLENBQUYsR0FBcUM7SUFBbkQsQ0FERjtFQURPOztFQUlULENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQWlCLE1BQWpCOztFQUNBLE1BQUEsQ0FBQTs7RUFuQ0E7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjaGFyUGFydHMgPSBbXG4gIFwiZC0xXCJcbiAgXCJkLTJcIlxuICBcImUtMVwiXG4gIFwiZS0yXCJcbiAgXCJzLTFcIlxuICBcImktMVwiXG4gIFwiaS0yXCJcbiAgXCJnLTFcIlxuICBcImctMlwiXG4gIFwibi0xXCJcbiAgXCJuLTJcIlxuXVxuXG5wYXJ0RWxlbSA9ICQoXCJwYXRoXCIpXG5mb3IgcGFydCBpbiBjaGFyUGFydHNcbiAgJChcInN2Z1wiKS5hcHBlbmQgcGFydEVsZW0uY2xvbmUoKS5hdHRyKFwiY2xhc3NcIiwgcGFydClcblxuaSA9IHNldEludGVydmFsIC0+XG4gICQoXCJkaXZcIikudG9nZ2xlQ2xhc3MgXCJ0ZXh0XCJcbiwgNzAwMFxuXG5zZXRUaW1lb3V0IC0+XG4gICQoXCJkaXZcIikudG9nZ2xlQ2xhc3MgXCJ0ZXh0XCJcbiwgMTAwXG5cbiQoXCJkaXZcIikuY2xpY2sgLT5cbiAgY2xlYXJJbnRlcnZhbCBpXG4gICQoXCJkaXZcIikudG9nZ2xlQ2xhc3MgXCJ0ZXh0XCJcblxucmVzaXplID0gLT5cbiAgJChcImJvZHlcIikuY3NzXG4gICAgXCJtYXJnaW4tdG9wXCI6IH5+KCh3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MDApIC8gMikgKyBcInB4XCJcbiAgICBcbiQod2luZG93KS5yZXNpemUgcmVzaXplXG5yZXNpemUoKVxuXG4jZ2V0IHRoZSBsaW5lIGxlbmd0aHNcbiMkKFwicGF0aFwiKS5lYWNoIChpKSAtPiBjb25zb2xlLmxvZyBAZ2V0VG90YWxMZW5ndGgoKVxuIl19
//# sourceURL=coffeescript