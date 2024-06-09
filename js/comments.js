
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    var comment = document.getElementById('comment').value;
    var rating = document.getElementById('rating').value;
    
   
    var movieComments = JSON.parse(localStorage.getItem('movieComments')) || [];
    movieComments.push({ comment: comment, rating: rating });
    localStorage.setItem('movieComments', JSON.stringify(movieComments));
    
   
    showComments();
});


function showComments() {
    var commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = ''; 
    
    var movieComments = JSON.parse(localStorage.getItem('movieComments')) || [];
    movieComments.forEach(function(comment, index) {
        var commentItem = document.createElement('div');
        commentItem.innerHTML = '<p><strong>Comentario:</strong> ' + comment.comment + '</p>' +
                                '<p><strong>Calificación:</strong> ' + comment.rating + '</p>';
        commentsList.appendChild(commentItem);
    });
}


showComments();
