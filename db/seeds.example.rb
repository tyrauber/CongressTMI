puts 'SETTING UP EXAMPLE USERS'
admin = Admin.create! :email => 'email@address.com', :password => 'password', :password_confirmation => 'password'
puts 'New user created: ' << admin.email
