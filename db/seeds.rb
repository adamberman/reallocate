ActiveRecord::Base.transaction do
	User.create!(first_name: 'Adam', last_name: 'Berman', email: 'adamberman13@gmail.com', password: 'admin1')
	users = []
	25.times do
		User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password)
		users.push(User.last.id)
	end

	organizations = []
	25.times do
		Organization.create!(name: Faker::Company.name, form_date: Faker::Date.backward(10000))
		organizations.push(Organization.last.id)
	end

	12.times do
		user = User.find(users.sample)
		Request.create!(name: Faker::Company.bs, description: Faker::Hacker.say_something_smart, requestable: user)
	end

	13.times do
		organization = Organization.find(organizations.sample)
		Request.create!(name: Faker::Company.bs, description: Faker::Hacker.say_something_smart, requestable: organization)
	end
	
	Request.first.transactions.create!(listable_id: 1, listable_type: 'User')
end