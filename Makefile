APP=log-dashboard
VERSION=latest

package:
	@echo '--> packaging...'
	@docker build -t harbor.amihan.net/talino/${APP}:${VERSION} .

deploy:
	@echo '--> deploying...'
	@docker push harbor.amihan.net/talino/${APP}:${VERSION}

chart:
	@echo '--> building helm chart...'
	@mkdir -p build/chart
	@cp -r helm/log-dashboard build/chart
	@helm package -u -d build/chart build/chart/log-dashboard
