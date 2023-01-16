\c raffles_dev;

INSERT INTO raffles (name, secret_token, date_created, date_raffled, winner_id) VALUES
('raffle one', '111aaa', 'Tue Jan 10 2023 at 07:40:38', null, null),
('raffle two', '222poi', 'Wed Jan 11 2023 at 15:40:58', null, null),
('raffle three', '333lkj', 'Tue Jan 10 2023 at 17:40:38', null, null),
('raffle four', '444mnb', 'Fri Jan 6 2023 at 10:40:38', null, null),
('raffle five', '555098', 'Tue Jan 3 2023 at 07:38:38', null, null);

INSERT INTO participants (raffle_id, firstname, lastname, email, phone) VALUES
('2', 'James', 'Brown', 'jamesbrown@gmail.com', '6463752227'),
('2', 'Andrew', 'Johnson', 'andrewjohnson@gmail.com', '9293751227'),
('3', 'Matthew', 'Williams', 'matthewwilliams@gmail.com', '6465752827'),
('4', 'George', 'Davis', 'georgedavis@gmail.com', '6465352827'),
('5', 'Ryan', 'Jones', 'ryanjone@gmail.com', '6465752927'),
('1', 'Rain', 'Jones', 'rainjone@gmail.com', '9295751827');
