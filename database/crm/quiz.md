1. 모든 사용자의 이름과 나이 조회

```sql
SELECT Name, Age
FROM users;
```

2. 최근 주문한 5개의 주문 조회

```sql
SELECT *
FROM orders
ORDER BY orderAt DESC
LIMIT 5;
```

3. 커피 종류 상품만 조회

```sql
SELECT *
FROM orders
ORDER BY orderAt DESC
LIMIT 5;
```

4. 서울에 위치한 매장 조회

```sql
SELECT *
FROM stores
WHERE Address LIKE '서울%';
```

5. 2000년도 이후에 태어난 여자 고객의 목록

```sql
SELECT *
FROM users
WHERE CAST(substr(birthDate, 1, 4) AS INTEGER) > 2000 AND Gender = 'Female';
```

6. 가장 나이가 많은 고객은?

```sql
SELECT *
FROM users
ORDER BY age DESC
LIMIT 1;
```

7. 가장 비싼 상품은?

```sql
SELECT *
FROM items
ORDER BY UnitPrice DESC
LIMIT 1;
```

<!--  -->

1. 사용자별 주문 횟수와 총 구매액 조회 ?????

```sql
SELECT u.Name, COUNT(o.id) AS order_qty, SUM(UnitPrice) AS total_price
FROM users u
JOIN orders o
  ON u.Id = o.UserId
JOIN orderitems oi
  ON o.Id = oi.OrderId
JOIN items i
  ON i.Id = oi.ItemId
GROUP BY u.Name;
```

2. 상점의 월간 매출액 조회

```sql
SELECT substr(o.orderAt, 6, 2) AS Month, SUM(UnitPrice) AS month_sales
FROM stores s
JOIN orders o
  ON s.Id = o.StoreId
JOIN orderitems oi
  ON o.Id = oi.OrderId
JOIN items i
  ON i.Id = oi.ItemId
GROUP BY substr(o.orderAt, 6, 2)
ORDER BY Month;
```

3. 연간 수입이 가장 많은 매장 Top10 조회

```sql
SELECT s.Name AS store_name, SUM(UnitPrice) AS year_sales, COUNT(o.id)
FROM stores s
JOIN orders o
  ON s.Id = o.StoreId
JOIN orderitems oi
  ON o.Id = oi.OrderId
JOIN items i
  ON i.Id = oi.ItemId
GROUP BY s.Name
ORDER BY year_sales DESC
LIMIT 10;
```

4. 각 아이템의 판매량 및 매출액 조회

```sql
SELECT i.Name, sum(i.Unitprice)
FROM items i
JOIN orderitems oi
  ON i.Id = oi.ItemId
GROUP BY i.Name;
```

5. 각 사용자의 총 주문 횟수 및 소비액 조회 (Top 20 Only)

```sql
SELECT u.Name, COUNT(*) AS order_qty, SUM(UnitPrice) AS total_price
FROM users u
JOIN orders o
  ON u.Id = o.UserId
JOIN orderitems oi
  ON o.Id = oi.OrderId
JOIN items i
  ON i.Id = oi.ItemId
GROUP BY u.Name
ORDER BY COUNT(*) DESC, SUM(UnitPrice) DESC
LIMIT 20;
```

6. 지역별 (시와 동까지 분할한 것을 기준으로) 매출액 조회

```sql
SELECT substr(s.Address, 1,2) AS si, substr(s.Address, 4,2) AS gu, sum(i.Unitprice) AS total_sales
FROM stores s
JOIN orders o
  ON s.Id = o.StoreId
JOIN orderitems oi
  ON o.Id = oi.OrderId
JOIN items i
  ON i.Id = oi.itemId
GROUP BY substr(s.Address, 1,2), substr(s.Address, 4,2)
ORDER BY sum(i.Unitprice) DESC;
```

7. 스타벅스 강남 1호점에 방문한 Top5 단골 고객은?

```sql
select u.Name, s.Name, count(*)
FROM users u
JOIN orders o
  ON u.Id = o.UserId
JOIN stores s
  ON s.Id = o.storeId
WHERE s.Name = '스타벅스 강남1호점'
GROUP BY u.Name
ORDER BY count(*) DESC
LIMIT 5;
```

8. 매장별 월간 매출액 조회 (최근 3개월)

```sql
SELECT s.Name, substr(o.orderAt, 6, 2) AS month, sum(UnitPrice) AS mount_sales
FROM stores s
JOIN orders o
  ON s.Id = o.StoreId
JOIN orderitems oi
  ON o.Id = oi.OrderId
JOIN items i
  ON i.Id = oi.itemId
WHERE o.OrderAt BETWEEN '2023-10-01' AND '2023-12-31'
GROUP BY s.Name, substr(o.orderAt, 6, 2);
```
