class JohnJordan < ApplicationRecord
  validates_presence_of :emailaddress
  validates_format_of :emailaddress, with: /\A([^\s]+)((?:[-a-z0-9]\.)[a-z]{2,})\z/i
end
