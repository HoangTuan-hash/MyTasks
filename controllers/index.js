var arrayTasks = [];
document.querySelector("#btnPlus").onclick = function () {
  var myTasks = new MyTasks();
  myTasks.taskName = document.querySelector("#activity").value;

  arrayTasks.push(myTasks);
  console.log(arrayTasks);
  renderTasks(arrayTasks);
  document.querySelector("#activity").value = '';
};
var renderTasks = function (arrayTasks) {
  var chuoiTaskNot = '';
  var chuoiTaskDone='';
  var titleNot = '<h3 class="text-center text-danger">My Tasks</h3>'
  var titleDone = '<h3 class="text-center text-success">Done</h3>'
  for (var index = 0; index < arrayTasks.length; index++) {
    var task = arrayTasks[index].taskName;
   
    if(arrayTasks[index].done){
      chuoiTaskDone += `
                    
                    <div type="text" class="form-control myTasks__content" placeholder="Enter an activity">
                        <p class="myTasks__text">${task}</p>
                        <div class="myTasks__btn">
                            <button class="btnDelete" id="btnDelete"><i class="fa fa-trash-o" onclick="xoaTask('${task}')"></i></button>
                            <button class="btnCheck" id="btnCheck"  onclick="checked('${task}')"><i class="fa fa-check"></i></button>
                        </div>
                    </div>
                    `;
    }
    else{
      chuoiTaskNot  += `
                    
                    <div type="text" class="form-control myTasks__content" placeholder="Enter an activity">
                        <p class="myTasks__text">${task}</p>
                        <div class="myTasks__btn">
                            <button class="btnDelete" id="btnDelete"><i class="fa fa-trash-o" aria-hidden="true" onclick="xoaTask('${task}')"></i></button>
                            <button class="btnCheck" id="btnCheck"  onclick="checked('${task}')"><i class="fa fa-check"></i></button>
                        </div>
                    </div>
                    `;
    }
  } 
  document.querySelector('#myTask').innerHTML = titleNot + chuoiTaskNot;
  document.querySelector('#tasksChecked').innerHTML = titleDone + chuoiTaskDone;

};
//Xóa các tasks
var xoaTask = function (textTask) {
  for (var index = arrayTasks.length - 1; index >= 0; index--) {
    var taskDelete = arrayTasks[index].taskName;
    if (taskDelete === textTask) {
      arrayTasks.splice(index, 1);
    }
  }
  renderTasks(arrayTasks);
};

var checked = function(task){
  for(var i =0; i<arrayTasks.length;i++){
    console.log(task);
    console.log((arrayTasks[i].taskName));
    if(arrayTasks[i].taskName === task ){
      arrayTasks[i].done = true;
    }
    console.log(arrayTasks[i].done);
  }
  renderTasks(arrayTasks);
}