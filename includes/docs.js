// Docs for the columns in the incremental tables:
const taxi_columns = {
    trip_start_timestamp: "When the trip started, rounded to the nearest 15 minutes.",
    trip_start_timestamp: "When the trip ended, rounded to the nearest 15 minutes.",
    trip_seconds: "Time of the trip in seconds.",
    trip_miles: "Distance of the trip in miles.",
    pickup_census_tract: "The Census Tract where the trip began. For privacy, this Census Tract is not shown for some trips.",
    dropoff_census_tract: "The Census Tract where the trip ended. For privacy, this Census Tract is not shown for some trips.",
    pickup_community_area: "The Community Area where the trip began.",
    dropoff_community_area: "The Community Area where the trip ended.",
    fare: "The fare for the trip.",
    tips: "The tip for the trip. Cash tips generally will not be recorded.",
    tolls: "The tolls for the trip.",
    extras: "Extra charges for the trip.",
    trip_total: "Total cost of the trip, the total of the fare, tips, tolls, and extras.",
    payment_type: "Type of payment for the trip.",
    company: "The taxi company.",
    pickup_latitude: "The latitude of the center of the pickup census tract or the community area if the census tract has been hidden for privacy.",
    pickup_longitude: "The longitude of the center of the pickup census tract or the community area if the census tract has been hidden for privacy.",
    dropoff_latitude: "The latitude of the center of the dropoff census tract or the community area if the census tract has been hidden for privacy.",
    dropoff_longitude: "The longitude of the center of the dropoff census tract or the community area if the census tract has been hidden for privacy.",
    tip_bin: "Tip/Fare bins - over or equal 0.2 and below",
    pickup_grid: "The pickup grid calculated",
    dropoff_grid: "The dropoff grid calculated",
    euclidean: "The euclidean distance of a trip",
    loc_cross: "The concatenation of pickup and dropoff grids"
}


module.exports = {
    taxi_columns,
};