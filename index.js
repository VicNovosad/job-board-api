/* 
    1. Send an AJAX request to https://remoteok.com/api
    2. Test that request to make sure it worked
    3. Use the data to create HTML
*/

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//        document.getElementById("demo").innerHTML = xhttp.responseText;
//     }
// };
// xhttp.open("GET", "filename", true);
// xhttp.send();

$.ajax({
    url: "https://remoteok.com/api",
    success: function(data){
        data.slice(1).forEach(function(row, i) {
            // console.log(row,i);
            $(`<div class="row">
                <div class="icon">
                    <div class="img-wrap">
                        <img src="${row.company_logo}" alt="">
                    </div>
                </div>
                <div class="left-section">
                    <h5 class="company">${row.company}</h5>
                    <h3 class="position">${row.position}</h3>
                    <p class="location">${row.location}</p>
                </div>
                <div class="mid-section">
                    ${row.tags.map(function(tag){
                        return `<div class="tag">${tag}</div>`
                    }).join('')}
                </div>
                <div class="mid-right-section">
                    ${new Date(row.date).toLocaleString()}
                </div>
                <div class="right-section">
                    <a href="${row.url}">
                        <button class="apply-btn">Apply</button>
                    </a>
                </div>
                </div>`).appendTo('.container-box');
            // console.log($rowDiv.text());
        })
    }
});

// if ($(`#${data[i].userId}`).length == 0){
//     $('.container').append($(`<div id="${data[i].userId}" class="container"></div>`)
//     .append($(`<h2>User ${data[i].userId}</h2>`)))
// }
// if (data[i].completed){
//     $(`#${data[i].userId}`).append($(`<div class="wrap"><span>✔ </span><p> ${data[i].title}</p></div>`))
// } else {$(`#${data[i].userId}`).append($(`<div class="wrap"><span>⚪</span><p> ${data[i].title}</p></div>`))}

// $(`.wrap`).click(function() {
//     // var $checkmark = $(e.target).find('span');
//     var $checkmark = $(this).children('span');
//     $checkmark.text() === '✔ ' ? $checkmark.text('⚪') : $checkmark.text('✔ ');
// })