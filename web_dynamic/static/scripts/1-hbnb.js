$(document).ready(function () {
  let checkedAmenity = {};

  $('input[type="checkbox"]').change(function () {
    let amenityName = $(this).attr('data-name');
    let amenityId = $(this).attr('data-id');

    if (this.checked) {
      checkedAmenity[amenityId] = amenityName;
    } else {
      delete checkedAmenity[amenityId];
    }

    if (Object.keys(checkedAmenity).length >= 1) {
      $('dev.amenities h4').text(Object.keys(checkedAmenity).join(', '));
    } else {
      $('dev.amenities h4').text("\u00A0");
    }
  });
});
