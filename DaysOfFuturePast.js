class DaysOfFuturePast {

  // Data. Time increments in milliseconds.

  static $0V_minute = 60000;

  static $0V_hour = 60 * this.$0V_minute;

  static $0V_day = 24 * this.$0V_hour;

  static $0V_week = 7 * this.$0V_day;

  static $0V_month = 30 * this.$0V_day; // approx

  static $0V_year = 365 * this.$0V_day;

  static $0V_decade = 10 * this.$0V_year;

  // Data. Array for [ increment, english ] pairs generated on module boot.

  static $0A_timestrings = [ ];

  // Logic. Start your engines.

  constructor ( ) {

    const resetIntervalInMinutes = 1;

    this.reset ( );

    this.interval = setInterval ( this.reset.bind ( this ), resetIntervalInMinutes * 60000 );

  }

  axis ( now = Date.now ( ) ) {

    let airato = now; // - Math.floor ( now % 60000 ) - 240 * 60000;

    const timestamps = [ ];

    for ( let i = 0; i < DaysOfFuturePast.$0A_timestrings.length; i++ ) {

      timestamps.push ( now - DaysOfFuturePast.$0A_timestrings[ i ][ 0 ] );

    }

    return timestamps;

  }

  getTimestring ( milliseconds = Date.now ( ) ) {

    // if ( this.timestamps[ 0 ] < milliseconds ) return "future";

    for ( let i = 0; i < this.timestamps.length; i++ ) {

      if ( this.timestamps[ i ] < milliseconds ) {
        
        console.log ( i );

        return DaysOfFuturePast.$0A_timestrings[ i ][ 1 ];

      }

    }

    return "a very long time ago";

  }

  reset ( ) {

    this.timestamps = this.axis ( );

  }

}

DaysOfFuturePast.$0A_timestrings.push ( [ 0, "now" ] );

// Logic. Minutes ago.

for ( let i = 1; i <= 60; i++ ) {
      
  const plural = i === 1 ? " minute " : " minutes ";
  
  const padded = String ( i ).padStart ( 2, "0" );

  DaysOfFuturePast.$0A_timestrings.push ( [ i * DaysOfFuturePast.$0V_minute, padded + plural + "ago" ] );

}

// Logic. Hours ago.

for ( let i = 2; i <= 24; i++ ) {
  
  const padded = String ( i ).padStart ( 2, "0" );

  DaysOfFuturePast.$0A_timestrings.push ( [ i * DaysOfFuturePast.$0V_hour, padded + "hours ago" ] );

}

// Logic. Days ago.

for ( let i = 2; i <= 7; i++ ) {

  const padded = String ( i ).padStart ( 2, "0" );

  DaysOfFuturePast.$0A_timestrings.push ( [ i * DaysOfFuturePast.$0V_day, padded + "days ago" ] );

}

// Logic. Weeks ago.

for ( let i = 2; i <= 4; i++ ) {

  const padded = String ( i ).padStart ( 2, "0" );

  DaysOfFuturePast.$0A_timestrings.push ( [ i * DaysOfFuturePast.$0V_week, padded + "weeks ago" ] );

}

// Logic. Months ago.

for ( let i = 2; i <= 12; i++ ) {
  
  const padded = String ( i ).padStart ( 2, "0" );

  DaysOfFuturePast.$0A_timestrings.push ( [ i * DaysOfFuturePast.$0V_month, padded + "months ago" ] );

}

// Logic. Years ago.

for ( let i = 2; i <= 10; i++ ) {

  const padded = String ( i ).padStart ( 2, "0" );

  DaysOfFuturePast.$0A_timestrings.push ( [ i * DaysOfFuturePast.$0V_year, padded + "years ago" ] );

}

// Logic. Decades ago.

for ( let i = 2; i <= 10; i++ ) {

  const padded = String ( i ).padStart ( 2, "0" );

  DaysOfFuturePast.$0A_timestrings.push ( [ i * DaysOfFuturePast.$0V_decade, padded + "decades ago" ] );

}

// Logic. A Long Time Ago.

DaysOfFuturePast.$0A_timestrings.push ( [ 11 * DaysOfFuturePast.$0V_decade, "a long time ago" ] );