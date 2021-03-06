class User < ActiveRecord::Base
	validates :first_name, :last_name, :email, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true

  has_many :requests, as: :requestable, dependent: :destroy
  has_many :offers, as: :offerable, dependent: :destroy
  has_many :responded_transactions, class_name: 'Transaction', as: :respondable, dependent: :destroy
  has_many :listed_transactions, through: :requests, source: :transactions

  attr_reader :password
  after_initialize :ensure_session_token

  def responded_offers
    self.responded_transactions.where('listable_type = ?', 'Offer')
  end

  def responded_requests
    self.responded_transactions.where('listable_type = ?', 'Request')
  end

  def increase_hours(hours)
    self.hours += hours
    self.save!
  end

  def decrease_hours(hours)
    self.hours -= hours
    self.save!
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.base64(16)
    self.save!
    self.session_token
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  private
  
  def ensure_session_token
    self.session_token ||= SecureRandom.base64(16)
  end
end
