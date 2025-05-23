+++
title = "Watchlist"
description = "abcd"
template = "prose.html"

[extra]
title = "Watchlist"
subtitle = "Some movies & shows I have watched or plan to watch"
+++
Watched

{{ collection(file="watched.toml") }}

Watchlist

{{ collection(file="watchlist.toml") }}
