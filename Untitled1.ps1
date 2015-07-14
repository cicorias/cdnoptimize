#$web = Get-AzureWebsite -Name maincdnhost

#$web.HostNames

#$web.HostNames.Add('r1.cicoriadev.net')


$newHosts = @("www.cicoriadev.net","r1.cdn.cicoriadev.net", "*.r.cicoriadev.net")
$newHosts = @("www.cicoriadev.net", "*.r.cicoriadev.net")
Get-AzureWebsite -Name maincdnhost | Set-AzureWebsite -HostNames $newHosts






