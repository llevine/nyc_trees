class LocationsController < ApplicationController

  def brooklyn
    render file: "#{Rails.root}/app//assets/resources/brooklyn.json",
    content_type: 'application/json',
    layout: false
  end

  def manhattan
    render file: "#{Rails.root}/app//assets/resources/manhattan.json",
    content_type: 'application/json',
    layout: false
  end

  def bronx
    render file: "#{Rails.root}/app//assets/resources/bronx.json",
    content_type: 'application/json',
    layout: false
  end

  def queens
    render file: "#{Rails.root}/app//assets/resources/queens.json",
    content_type: 'application/json',
    layout: false
  end
end
