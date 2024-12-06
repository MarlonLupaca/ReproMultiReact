FROM openjdk:21-jdk-slim
ARG JAR_FILE=target/ApiRepro-0.0.1.jar
COPY ${JAR_FILE} app_ApiRepro.jar 
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app_ApiRepro.jar"]