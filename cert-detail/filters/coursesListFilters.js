app.filter("availableClasses", function() {
  return function(input, availableClasses) {
    var result = [];
    for ( var course in input) {
      var validKey = input[course].sections;
      var rollUpAvailability = false;
      if ( validKey && input[course].sections.section.sectionAvailabilityStatus ) {
       // console.log(input[course].sections.section.sectionAvailabilityStatus);
       // console.log(input[course].name);
        if (input[course].sections.section.sectionAvailabilityStatus.label == availableClasses ) {
          result.push(input[course]);
        }
      } else if ( validKey && Array.isArray(input[course].sections.section) ) {
        // console.log(input[course].sections.section.sectionAvailabilityStatus);
        // console.log(input[course].sections.section); 
        for (var i=0; i<input[course].sections.section.length; i++) {
          if (input[course].sections.section[i].sectionAvailabilityStatus.label == availableClasses) {
           rollUpAvailability = true;
          }
        }
        if (rollUpAvailability) { result.push(input[course]); }
      }
    }
    return result;
  };
});

/* Exclude filter not used at the moment */
app.filter("exclude", function() { 
  return function(input, exclude) {
    var result;
    if ( input.section.sectionAvailabilityStatus ) {
      result  = {};
      //console.log(input.section.sectionAvailabilityStatus.label);
      if( input.section.sectionAvailabilityStatus.label != exclude ) {
        result = input;
      }
    } else {
      result = [];
      for (var i=0; i<input.section.length; i++) {
        if (input.section[i].sectionAvailabilityStatus.label !== exclude) {
          result.push(input.section[i]);
        }
      }
    }
    return result;
  };
});
