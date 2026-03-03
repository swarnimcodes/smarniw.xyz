+++
title = "Movies"
description = "abcd"
template = "prose.html"

[extra]
title = "Watchlist"
subtitle = "Some movies & shows I have watched or plan to watch"
+++
The list is grossly out-of-date, but okay!

## Watched

{{ collection(file="watched.toml") }}

## Watchlist

{{ collection(file="watchlist.toml") }}
