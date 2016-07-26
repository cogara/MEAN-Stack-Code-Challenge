(function(){

  angular
    .module('groceryListApp',[])
    .controller('GroceryController', GroceryController);

  function GroceryController($http) {
    let vm = this;

    vm.addItem = addItem;
    vm.removeItem = removeItem;
    vm.editItem = editItem;
    vm.cancelEdit = cancelEdit;
    vm.submitEdit = submitEdit;

    function addItem() {
      var sendData = {}
      sendData.name = vm.name;
      sendData.qty = vm.qty;
      vm.name = null;
      vm.qty = null;
      console.log('Adding item:', sendData);
      $http.post('/grocery/add', sendData).then(handleSuccess, handleFailure);
    }

    function removeItem(id) {
      console.log('remove', id);
      $http.delete('grocery/delete/'+id).then(handleSuccess, handleFailure);
    }

    function editItem(index) {
      console.log('Clicked Edit on', vm.groceryList[index]);
      vm.editName = vm.groceryList[index].name;
      vm.editQty = vm.groceryList[index].qty;
      for (var i = 0; i < vm.groceryList.length; i++) {
        vm.groceryList[i].edit = false;
      }
      vm.groceryList[index].edit = true;
    }

    function submitEdit(id) {
      var sendData = {};
      sendData.name = vm.editName;
      sendData.qty = vm.editQty;
      console.log('Data for edit', sendData);
      $http.put('/grocery/edit/' + id, sendData).then(handleSuccess, handleFailure);
    }

    function cancelEdit() {
      for (var i = 0; i < vm.groceryList.length; i++) {
        vm.groceryList[i].edit = false;
      }
    }

    function getItems() {
      $http.get('/grocery/list').then(handleGetSuccess, handleFailure)
    }

    function handleGetSuccess(response) {
      vm.groceryList = response.data;
      console.log('Grocery list', vm.groceryList);
    }
    function handleSuccess(response) {
      console.log('Post/Delete Success');
      getItems();
    }

    function handleFailure(response) {
      console.log('HTTP Failure', response);
    }

    getItems();
  //end GroceryController
  }





})();
