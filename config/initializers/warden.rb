#
Warden::Manager.before_logout do |user,auth,opts|
  auth.cookies.delete '_ember_devise_user'
end