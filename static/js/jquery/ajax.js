$(document).ready(function () {

  // Like increment function
  $(".incrementBtn").click(function () {
    var videoId = $(this).data("video-id");
    $.ajax({
      url: "/updateLikes/" + videoId,
      type: "POST",
      success: function (updatedLikes) {
        $("#likeCount_" + videoId).text(updatedLikes); // Update like count for specific video
      },
      error: function () {
        alert("Error updating like count.");
      },
    });
  });









});
