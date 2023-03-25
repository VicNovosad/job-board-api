// https://remoteok.com/api

$.ajax({
    url: "https://remoteok.com/api",
    success: function(data){
        data.slice(1).forEach(function(row, i) {
            // console.log(row,i);
            if (row.company_logo) {
                const $row =  $(`<div class="row">
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
            }   else {
                // console.log(`${row.company} logo is not available`)
            }
            // console.log($rowDiv.text());
        })

        // if image is not available change the image to default jpg
        $('.container-box img').each(function(index){
            if ($(this).width() === 0){
                $(this).attr('src', 'anavailable.jpg')
            };
        })
    }
})