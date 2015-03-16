wifi.setmode(wifi.STATION);
wifi.sta.config("SSID","PASSWORD")
function wait_wifi()
  count = count + 1

  wifi_ip = wifi.sta.getip()
      print("Looking for wifi")
  if wifi_ip == nil and count < 20 then
    tmr.alarm(1,1000,0,wait_wifi)
  elseif count >= 20 then
    wifi_connected = false
    print("Wifi connect timed out.")
  else
    wifi_connected = true
    print("Got IP "..wifi_ip.."\n")
    dofile("myserver.lua")
    end
    end