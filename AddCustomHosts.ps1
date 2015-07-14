$newHosts = @("www.zdcdn.net", "*.d.zdcdn.net")
Get-AzureWebsite -Name maincdnhost | Set-AzureWebsite -HostNames $newHosts

