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
6. 가장 나이가 많은 고객은?
7. 가장 비싼 상품은?

8. 사용자별 주문 횟수와 총 구매액 조회

```sql
SELECT u.Name, COUNT(o.Id)
FROM users u
JOIN orders o
  ON u.Id = o.UserId
GROUP BY u.Name;
```

2. 상점의 월간 매출액 조회

3. 연간 수입이 가장 많은 매장 Top10 조회
4. 각 아이템의 판매량 및 매출액 조회
5. 각 사용자의 총 주문 횟수 및 소비액 조회 (Top 20 Only)
6. 지역별 (시와 동까지 분할한 것을 기준으로) 매출액 조회
7. 스타벅스 강남 1호점에 방문한 Top5 단골 고객은?
8. 매장별 월간 매출액 조회 (최근 3개월)
