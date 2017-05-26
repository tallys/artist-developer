# Artist-Developer Website

### Install

1. `gem install bundler`
1. `bundle install` (this sometimes causes problems b/c of Nokogiri - if so, run `bundle config build.nokogiri --use-system-libraries` first)

### Development

1. `bundle exec middleman`

### Deploy

1. `rake build` (if you want to check the build before publishing)
1. `rake publish` (to go ahead and push to Github pages)

It seems like sometimes you have to clear out the build directory before publishing - if you get errors, try `rm -rf build && rake publish`