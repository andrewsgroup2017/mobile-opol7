/* eslint-disable */
// import BackgroundGeolocation from 'mauron85-background-geolocation'
//.LocationService: New location BGLocation[gps 32.317400,-95.247456 id=null acc=68 t=1530150404000 et=+2d7h27m6s882ms alt=159.0 vel=0.0 {Bundle[mParcelledData.dataSize=40]} locprov=0]
////D/com.marianhello.bgloc.LocationService: Persisted location: BGLocation[gps 32.317400,-95.247456 id=67 acc=68 t=1530150404000 et=+2d7h27m6s882ms alt=159.0 vel=0.0 {Bundle[mParcelledData.dataSize=40]} locprov=0]


import {
  EventBus
} from './event-bus.js'

var callbackFn = function(location) {
  console.log(location)
  console.log('starting location update')
  var loc = {
    latitude: location.latitude,
    longitude: location.longitude,
    time: location.time,
  }
  EventBus.$emit('location-update', loc)
  console.log('finishing update')
  backgroundGeolocation.finish()
}
var failureFn = function(error) {
  console.log('BackgroundGeolocation error', error)
  EventBus.$emit('location-error', error)
}

function onDeviceReady() {
  console.log('configuring adsf geolocation')
  backgroundGeolocation.configure(callbackFn, failureFn, {
    interval: 10000,
    debug: true,
    startOnBoot: true,
    stopOnTerminate: false,
    stopOnStillActivity: false,
    stationaryRadius: 0,
    distanceFilter: 0,
    // maxLocations: 1000,
    // // Android only section
    // locationProvider: backgroundGeolocation.provider.ANDROID_ACTIVITY_PROVIDER,
    // interval: 5000,
    fastestInterval: 8000,
    activitiesInterval: 10000,
    notificationTitle: 'Background tracking',
    notificationText: 'enabled',
    notificationIconColor: '#FEDD1E',
    notificationIconLarge: 'mappointer_large',
    notificationIconSmall: 'mappointer_small',
  })
  backgroundGeolocation.start()
}
document.addEventListener('deviceready', onDeviceReady, false)
