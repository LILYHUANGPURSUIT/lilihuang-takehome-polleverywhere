\c raffles_dev;

INSERT INTO raffles (name, secret_token, date_created, date_raffled, winner_id) VALUES
('raffle one', '111aaa', '2023-01-02 22:00:00'),
('raffle two', '222poi', '2022-12-02 20:00:00'),
('raffle three', '333lkj', '2023-01-12 12:00:00'),
('raffle four', '444mnb', '2022-12-22 22:00:00'),
('raffle five', '555098', '2023-01-11 09:10:00');

INSERT INTO participants (raffle_id, firstname, lastname, email, phone) VALUES
('2', 'James', 'Brown', 'jamesbrown@gmail.com', '6463752227'),
('2', 'Andrew', 'Johnson', 'andrewjohnson@gmail.com', '9293751227'),
('3', 'Matthew', 'Williams', 'matthewwilliams@gmail.com', '6465752827'),
('4', 'George', 'Davis', 'georgedavis@gmail.com', '6465352827'),
('5', 'Ryan', 'Jones', 'ryanjone@gmail.com', '6465752927'),
('1', 'Rain', 'Jones', 'rainjone@gmail.com', '9295751827');
