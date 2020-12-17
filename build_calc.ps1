$times = New-Object Collections.Generic.List[int]


For ($i = 0; $i -lt $args[0]; $i++) {
    if (Test-Path "dist") {
        Remove-Item -LiteralPath "dist" -Force -Recurse
    }
    $output = npm run build
    $words = $output.Split(" ")
    $index = $words.IndexOf("Time:")
    $time = $words[$index+1]
    # Remove "ms"
    $time = $time.Substring(0, $time.Length-2)
    $times.Add($time -as [int])
}

Write-Output $times