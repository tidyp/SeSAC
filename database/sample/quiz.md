1.
SELECT CONCAT(FirstName,' ',LastName) AS FullName, CustomerId, country
FROM customers
WHERE country='USA';

1-2.
SELECT CONCAT(FirstName,' ',LastName) AS FullName, CustomerId, country
FROM customers
WHERE country!='USA';

2.
SELECT CONCAT(FirstName,' ',LastName) AS FullName, CustomerId, country
FROM customers
WHERE country='Brazil';

3.
SELECT customers.FirstName || ' ' || customers.LastName AS FullName, invoices.invoiceId, invoices.invoiceDate, invoices.BillingCountry
FROM customers
JOIN invoices
ON customers.CustomerId = invoices.CustomerId
WHERE customers.country='Brazil';

SELECT CONCAT(c.FirstName || ' ' || c.LastName) AS FullName, i.invoiceId, i.invoiceDate, i.BillingCountry
FROM customers c
JOIN invoices i
ON c.CustomerId = i.CustomerId
WHERE c.country='Brazil';

4.
SELECT CONCAT(FirstName,' ',LastName) AS FullName, title
FROM employees 
WHERE title='Sales Support Agent';

5.
SELECT DISTINCT(BillingCountry)
FROM invoices;

6.
SELECT i.invoiceID, i.Total, CONCAT(e.FirstName, ' ', e.LastName) AS "FullName" 
FROM invoices i
JOIN customers c 
ON i.CustomerId == c.CustomerId 
JOIN employees e
ON c.SupportRepId == e.EmployeeId;

8.
SELECT COUNT(*)
FROM invoices
WHERE strftime('%Y', InvoiceDate) IN ('2009', '2011');

SELECT COUNT(*)
FROM invoices
WHERE InvoiceDate Like '2009%' OR InvoiceDate Like '2011%';

9.
SELECT strftime('%Y', InvoiceDate) AS year, SUM(Total) AS total_sales
FROM invoices
GROUP BY strftime('%Y', InvoiceDate);

10.
SELECT COUNT(*)
FROM invoices i
JOIN invoice_items ii 
ON i.InvoiceId == ii.InvoiceId 
WHERE ii.InvoiceId = 37;

11.
SELECT InvoiceId, SUM(Quantity)
FROM invoice_items
GROUP BY InvoiceId;

12.
SELECT i.InvoiceId, ii.TrackId
FROM invoices i
JOIN invoice_items ii
ON i.invoiceID = ii.invoiceID;

13.
SELECT invoice_items.InvoiceLineId, Tracks.name , Artists.Name
FROM invoice_items
JOIN Tracks
  ON Tracks.TrackId = invoice_items.TrackId
JOIN Albums
  ON Albums.AlbumId = Tracks.AlbumId
JOIN Artists
  ON Artists.ArtistId = Albums.ArtistId;

14.
SELECT BillingCountry, COUNT(InvoiceId)
FROM Invoice
GROUP BY BillingCountry;

15.
SELECT pl.Name, COUNT(pt.TrackId)
FROM Playlists pl
JOIN Playlist_Track pt
ON pl.PlaylistId = pt.PlaylistId;

SELECT pl.Name, COUNT(pt.TrackId)
FROM Playlists pl
JOIN Playlist_Track pt
ON pl.PlaylistId = pt.PlaylistId
GROUP BY pl.name;

SELECT pl.Name, SUM(pt.TrackId)
FROM Playlists pl
JOIN Playlist_Track pt
ON pl.PlaylistId = pt.PlaylistId
GROUP BY pl.name;


22.
SELECT BillingCountry, SUM(Total) AS top_country
FROM invoices
GROUP BY BillingCountry;


1. 
SELECT Name, age
FROM users;

2.
SELECT * 
FROM orders
ORDER BY OrderAt DESC
LIMIT 5;

3.
SELECT DISTINCT(Name)
FROM items;

4.
SELECT *
FROM stores
WHERE Address LIKE '서울%';

5.
SELECT *
FROM users
WHERE Gender = 'Female' AND Birthdate LIKE '2%';

6.
SELECT MAX(age)
FROM users;

.import .user.csv users

CREATE TABLE new_users(
  Id TEXT PRIMARY KEY,
  Name TEXT,
  Gender TEXT,
  Age INTEGER,
  Birthdate TEXT,
  Address TEXT
);

새테이블로 형변환
INSERT INTO new_users(Id, Name, Gender, Age, Birthdate, Address)
SELECT Id, Name, Gender, CAST(Age AS INTEGER), CAST(Age AS DATETIME), Address FROM users;  

ALTER TABLE new_users RENAME TO users;

