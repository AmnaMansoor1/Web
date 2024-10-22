// create and update user
$(document).ready(function () {
    $('#userForm').on('submit', function (e) {
        e.preventDefault();

        let userId = $('#userId').val();
        let userData = {
            name: $('#name').val(),
            email: $('#email').val()
        };

        if (userId) {
            // Update existing user
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users/' + userId,
                method: 'PUT',
                data: userData,
                success: function (response) {
                    console.log('User updated:', response);
                    loadUsers();  // Refresh the users list
                    $('#userForm')[0].reset();  // Clear the form
                }
            });
        } else {
            // Create new user
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'POST',
                data: userData,
                success: function (response) {
                    console.log('User created:', response);
                    loadUsers();  // Refresh the users list
                    $('#userForm')[0].reset();  // Clear the form
                }
            });
        }
    });
});
//read user
function loadUsers() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function (response) {
            $('#usersList').empty();  // Clear the list first
            response.forEach(function (user) {
                $('#usersList').append(`
                    <li>
                        ${user.name} (${user.email})
                        <button onclick="editUser(${user.id})">Edit</button>
                        <button onclick="deleteUser(${user.id})">Delete</button>
                    </li>
                `);
            });
        }
    });
}

$(document).ready(function () {
    loadUsers();  // Load users on page load
});
//Delete user
function deleteUser(id) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/' + id,
        method: 'DELETE',
        success: function () {
            console.log('User deleted');
            loadUsers();  // Refresh the users list
        }
    });
}
