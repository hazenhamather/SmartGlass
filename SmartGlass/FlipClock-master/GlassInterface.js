/**
 * Created by hamathhj on 11/5/16.
 */
var count = 0;
getWeather(count);
getCNN();
getESPN();
getGoogle();
// getFamousQuote();
console.log("ajax about to execute");
setInterval(getWeather,1000*60*5);
setInterval(getCNN,1000*60*5.3);
setInterval(getESPN,1000*60*5.5);
setInterval(getGoogle,1000*60*5.8);
// setInterval(getFamousQuote,1000*60*60*6)

function getWeather(count) {
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast/city?id=4265737&APPID=811797f073520b12e9b8f5ee137c9a0d', function (currentWeather) {
        console.log("Grabbed weather")
        var temp = currentWeather.list[0].main.temp * (9 / 5) - 459.67;
        $('.city').text(currentWeather.city.name).css('color', 'white').css('font-size', 18);
        $('.currentTemp').text(Math.round(temp)).css('font-size', 18).css('color', 'white');

        if(count != 0) {
            $('#icon').attr('<img id="icon" src = "http://openweathermap.org/img/w/' + currentWeather.list[0].weather[0].icon + '.png"/>')
        } else {
            $('.weatherIcon').prepend('<img id="icon" src = "http://openweathermap.org/img/w/' + currentWeather.list[0].weather[0].icon + '.png"/>');
        }
        $('.currentConditions').text(currentWeather.list[0].weather[0].description).css('font-size', 18).css('color', 'white');
        $('.windDirection').text(Math.round(currentWeather.list[0].wind.deg)).css('font-size', 18).css('color', 'white');
        $('.windSpeed').text(Math.round(currentWeather.list[0].wind.speed)).css('font-size', 18).css('color', 'white');
    });
};

function getCNN() {
    $.getJSON('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=a41b3043a7df4311a62b21a4c756d67e', function (CNNnews) {
        console.log("Grabbed CNN");
        $("#CNN1").text("1. " + CNNnews.articles[0].description);
        $("#CNN2").text("2. "+CNNnews.articles[2].description);
        $("#CNN3").text("3. "+CNNnews.articles[3].description);
    })
};

function getESPN() {
    $.getJSON('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=a41b3043a7df4311a62b21a4c756d67e', function (ESPNnews) {
        console.log("Grabbed ESPN");
        $("#ESPN1").text("4. "+ESPNnews.articles[0].description);
        $("#ESPN2").text("5. "+ESPNnews.articles[1].description);
        $("#ESPN3").text("6. "+ESPNnews.articles[2].description);
    })
}

function getGoogle() {

    $.getJSON('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=a41b3043a7df4311a62b21a4c756d67e', function (Googlenews) {
        console.log("Grabbed Googlenews");
        $("#Google1").text("7. "+Googlenews.articles[0].description);
        $("#Google2").text("8. "+Googlenews.articles[1].description);
        $("#Google3").text("9. "+Googlenews.articles[2].description);
    })
}

function getFamousQuote() {
    $.getJSON('http://quotes.rest/qod.json', function (Famousquotes) {
        console.log("Grabbed a famous quote");
        $("#famousQuote").text(Famousquotes.contents.quotes[0].quote);
        $("#famousAuthor").text("-" + Famousquotes.contents.quotes[0].author);
    })
}