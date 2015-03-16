



ledPin2 = 3
ledPin = 4
--tmr.delay(100000)

print(wifi.sta.getip())
-- Setup I/O pins --
gpio.mode(ledPin,gpio.OUTPUT)
gpio.mode(ledPin2,gpio.OUTPUT)
-- LUA Webserver --
srv=net.createServer(net.TCP)
srv:listen(8081,function(conn)
conn:on("receive",function(conn,payload)
print(node.heap())
print(payload)


command = string.sub(payload, 6,8) -- Get characters 6,7, and 8 which is "set" in GET /set?b=1 HTTP/1.1
if (command == "set") then

print("Command returned char 6 7 8 = " .. command)

sentValue = string.sub(payload, 12,12) -- Get the 12th character

print("sent value the 12 char=" .. sentValue)
if (sentValue=="0") then
ledValue = gpio.HIGH
gpio.write(ledPin, ledValue)
reply = "{ \"led\":\"" .. tostring(ledValue) .. "\" }"
print("Printing reply 0 the end " .. reply)
end
if (sentValue=="1") then
ledValue = gpio.LOW
gpio.write(ledPin, ledValue)
reply = "{ \"led\":\"" .. tostring(ledValue) .. "\" }"
print("Printing reply 1 the end " .. reply)
end
if (sentValue=="2") then
ledValue = gpio.HIGH
gpio.write(ledPin2, ledValue)
reply = "{ \"led\":\"" .. tostring(ledValue) .. "\" }"
print("Printing reply 2 the end " .. reply)
end
if (sentValue=="3") then
ledValue = gpio.LOW
gpio.write(ledPin2, ledValue)
reply = "{ \"led\":\"" .. tostring(ledValue) .. "\" }"
print("Printing reply 3 the end " .. reply)
end
if (sentValue=="4") then
switchValue = gpio.read(ledPin)
if (switchValue == 0) then
switchValue = 2
end
switchValue1 = gpio.read(ledPin2)
reply =  tostring(switchValue..switchValue1) 
print("Printing reply 4 " .. reply)
end
end
payloadLen = string.len(reply)
conn:send("HTTP/1.1 200 OK\r\n")
conn:send("Content-Length:" .. tostring(payloadLen) .. "\r\n")
conn:send("Connection:close\r\n\r\n")
conn:send(reply)
print("Printing reply @ the end " .. reply)
end)
conn:on("sent",function(conn)
conn:close()
end)
end)
