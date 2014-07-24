window.onload = app;

function Stopwatch() {
    this.times = [];
    this.interval = null;
    this.interval_window = 16;
    this.html_element = document.querySelector('h1');
    this.start_stop_button = document.querySelector('.start_stop');
    this.reset_button = document.querySelector('.reset');
    this.handleClickEvents();
    this.started = false;
    this.click_num = 0;
}

Stopwatch.prototype.handleClickEvents = function(){
    var self = this;
	this.start_stop_button.addEventListener('click', function(){
		if(!self.started){
			self.start();
		} else {
			self.stop();
		}
        self.click_num += 1;
	});
    this.reset_button.addEventListener('click', function(){
        self.reset();
    });
}

Stopwatch.prototype.start = function() {
    var self = this;
    this.times[0] = new Date();
    this.started = true;
    this.start_stop_button.innerText = 'Stop';
    
    if(this.click_num === 0){
        this.times[1] = new Date();
        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
    }
    else{
       self.times[1].setTime(self.times[0].getTime() + this.time_elapsed);
    }

    this.interval = setInterval(function() { // run this ~60 times a second
        self.times[1].setTime(
        	self.times[1].getTime() + self.interval_window
        );
        self.printElapsedTime();
    }, this.interval_window) //our screens max at 60fps ~ 16.6ms
};

Stopwatch.prototype.resume = Stopwatch.prototype.start;

Stopwatch.prototype.stop = function() {
    clearInterval(this.interval);
    this.started = false;
    this.start_stop_button.innerText = 'Start';
    // extra stuff :?
};

// Stopwatch.prototype.pause = function() {
//     clearInterval(this.interval);
//     this.started = false;
// };

Stopwatch.prototype.reset = function() {
    this.stop();
    this.click_num = 0;
    this.html_element.innerText = '00:00:00';
};

Stopwatch.prototype.printElapsedTime = function(){
	this.time_elapsed = this.times[1].getTime() - this.times[0].getTime();
    this.milliseconds = this.time_elapsed%1000;
    if(this.milliseconds > 990)
    {
        this.seconds = this.seconds + 1;
    }
    if (this.seconds === 60)
    {
        this.seconds = 0;
        this.minutes = this.minutes + 1;
    }
    console.log(this.seconds);
    // this.milliseconds = this.times[1].getMilliseconds() - this.times[0].getMilliseconds();
    // this.seconds = this.times[1].getSeconds() - this.times[0].getSeconds();
    // this.minutes = this.times[1].getMinutes() - this.times[0].getMinutes();

	this.html_element.innerText = this.minutes + ' ' + this.seconds + ' ' + this.milliseconds;
}

Stopwatch.prototype.WAT = function() {
    // BONUS
};

function app() {
    var watch = new Stopwatch();
}
