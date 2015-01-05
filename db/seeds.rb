ActiveRecord::Base.transaction do
	25.times do
		Organization.create!(name: Faker::Company.name, form_date: Faker::Date.backward(10000))
	end
end