$("<td> Rating(1-5) <input name='Rating' type='text' style='width:100px; height:30px; margin-right: 15px; margin-bottom: 12px' placeholder='0-5' value=0 /> </td>").appendTo(".prediction")
$("<td> Popularity(1-20) <input name='Popu' type='text' style='width:100px; height:30px; margin-right: 15px; margin-bottom: 12px' placeholder='0-20' value=0 /> </td>").appendTo(".prediction")
$("<td> Runtime <input name='Runtime' type='text' style='width:100px; height:30px; margin-right: 15px; margin-bottom: 12px' placeholder='0-200' value=0 /> </td>").appendTo(".prediction")
$("<td> Release Year <input name='R_Y' type='text' style='width:150px; height:30px; margin-down: 12px' placeholder='Year, exp. 2022' value=0 /> </td>").appendTo(".prediction")
$("<button>Calculate your movie budget</button>").appendTo(".prediction")
$("<td> Budget <input name='Budget' type='text' style='width:200px; height:30px;' /> </td>").appendTo(".prediction")


$("button").click(function(){
    var rating = $("input[name='Rating']").val();
    var popu = $("input[name='Popu']").val();
    var runtime = $("input[name='Runtime']").val();
    var year = $("input[name='R_Y']").val();
    var budget = -0.000003 * parseInt(rating) + 191100 * parseInt(popu) + 233600 * parseInt(runtime) + -1885.68 * parseInt(year);
    $("input[name='Budget']").attr("value", budget)
  });