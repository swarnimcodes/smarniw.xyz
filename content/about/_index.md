+++
title = "About me"
description = "About page of ..."
template = "prose.html"
insert_anchor_links = "none"

[extra]
lang = 'en'

title = "About"
# subtitle = "I write about ...."

math = false
mermaid = false
copy = false
comment = false
reaction = false
+++

## Education 

{{ collection(file="education.toml") }}

## Professional Experience

{{ collection(file="experience.toml") }}
