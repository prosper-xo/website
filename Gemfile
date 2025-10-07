source "https://rubygems.org"

# Specify Ruby version (GitHub Pages compatible)
ruby "2.7.2"

# GitHub Pages gem (includes Jekyll and all compatible plugins)
# Commenting out standalone jekyll as recommended by GitHub Pages docs
# gem "jekyll", "~> 4.3"

gem "github-pages", "~> 228", group: :jekyll_plugins

# Required for Jekyll serve with Ruby 3.0+
gem "webrick", "~> 1.8"

# Additional plugins (already included in github-pages but listed for clarity)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap", "~> 1.4"
end

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb for JRuby compatibility
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
