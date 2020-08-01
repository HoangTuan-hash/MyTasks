var mangTask = [];
document.querySelector("#btnPlus").onclick = function () {
  var acti = document.querySelector("#activity").value;
  mangTask.push(acti);
  renderTasks(mangTask,'#myTask');
  document.querySelector("#activity").value = '';
};
var renderTasks = function (arrayTask,id) {
  var chuoiTask = "";
  for (var index = 0; index < arrayTask.length; index++) {
    var task = arrayTask[index];
    chuoiTask += `
                    <div type="text" class="form-control myTasks__content" placeholder="Enter an activity">
                        <p class="myTasks__text">${task}</p>
                        <div class="myTasks__btn">
                            <button class="btnDelete" id="btnDelete"><i class="fa fa-trash-o" aria-hidden="true" onclick="xoaTask('${task}')"></i></button>
                            <button class="btnCheck" id="btnCheck"  onclick="checked('${task}')"><i class="fa fa-check"></i></button>
                        </div>
                    </div>
                `;
  }
  var test = `${arrayTask}`;
  console.log('gia tri test la',test);
  document.querySelector(id).innerHTML = chuoiTask;
};
//Xóa các tasks chưa làm
var xoaTask = function (textTask) {
  for (var index = mangTask.length - 1; index >= 0; index--) {
    var taskDelete = mangTask[index];
    if (taskDelete === textTask) {
      mangTask.splice(index, 1);
    }
  }
  renderTasks(mangTask,'#myTask');
};
// Đem thẻ đã check vào trong khối checked
var blockCheck = document.querySelector("#tasks__checked");
var mangChecked = [];
var chuoiChecked = '';
var checked = function (textTask) {
 
  for (let index = 0; index < mangTask.length; index++) {
    var taskChecked = mangTask[index];
    
    if (taskChecked === textTask) {
      mangChecked.push(taskChecked);
    }
    mangTask.splice(taskChecked,1);
  }
  renderTasks(mangChecked,'#tasks__checked');
  renderTasks(mangTask,'#myTask');
  document.getElementById('btnCheck').style.color = 'green';
};


// var xoaChecked = function(value){
//   for (let index = 0; index < mangTask.length; index++) {
//     var deleteChecked =  mangChecked[index];
//     if(value === deleteChecked){
//       mangChecked.splice(value,1);
//     }
//   }
//   renderTasks(mangChecked,'#checked');
// }