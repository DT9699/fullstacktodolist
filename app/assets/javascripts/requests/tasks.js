$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

// task list index
var indexTasks = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: successCB,
    error: errorCB
  }
  $.ajax(request);
};

// create task
var postTask = function (content, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: content
      }
    },
    success: successCB,
    error: errorCB
  }
  $.ajax(request);

};

// Update task
var updateTask = function (id, successCB, errorCB) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + id + '?api_key=1',

    success: successCB,
    error: errorCB
  }
  $.ajax(request);
};


// delete task
var deleteTask = function (id, successCB, errorCB) {
  var request = {
    type: 'DELETE',
    url: 'api/tasks/' + id + '?api_key=1',
    success: successCB,
    error: errorCB
  }
  $.ajax(request);
};

// Mark Task Complete

var markTaskComplete = function (id, successCB, errorCB) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + id + '/mark_complete?api_key=1',
    success: successCB,
    error: errorCB
  }
  $.ajax(request);
};

// Mark Task Active

var markTaskActive = function (id, successCB, errorCB) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + id + '/mark_active?api_key=1',
    success: successCB,
    error: errorCB
  }
  $.ajax(request);
};
