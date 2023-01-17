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
('3', 'Paul', 'Williams', 'paulwilliams@gmail.com', '6465752827'),
('3', 'Joshua', 'Williams', 'joshuawilliams@gmail.com', '6465752827'),
('4', 'George', 'Davis', 'georgedavis@gmail.com', '6465352827'),
('4', 'Donna', 'Davis', 'donnadavis@gmail.com', '6460982827'),
('4', 'Michelle', 'Davis', 'michelledavis@gmail.com', '6412352827'),
('4', 'Carol', 'Davis', 'caroldavis@gmail.com', '6460002827'),
('4', 'Gary', 'Davis', 'garydavis@gmail.com', '6461399827'),
('4', 'Amy', 'Davis', 'amydavis@gmail.com', '6465992827'),
('1', 'Ryan', 'Jones', 'ryanjone@gmail.com', '6465766927'),
('1', 'Rain', 'Jones', 'rainjone@gmail.com', '9295951827'),
('3', 'Kyle', 'Williams', 'kylewilliams@gmail.com', '6465333827'),
('3', 'Henry', 'Williams', 'henrywilliams@gmail.com', '6461112827'),
('5', 'Janet', 'Williams', 'janetwilliams@gmail.com', '6460752827'),
('5', 'Jack', 'Williams', 'jackwilliams@gmail.com', '6465756827'),
('5', 'Debra', 'Williams', 'debrawilliams@gmail.com', '6465952827');
