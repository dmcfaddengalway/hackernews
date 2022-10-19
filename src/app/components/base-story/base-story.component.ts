import { HttpClient } from "@angular/common/http";

import { StoriesService } from "src/app/services/stories-service.service";

export class BaseStoryComponent {

  constructor(protected httpClient: HttpClient, protected storiesService: StoriesService) { }

}
