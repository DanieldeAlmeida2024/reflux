import { ProvidersTrendingService } from '@/modules/providers/services/trending.service';
import { StremioService } from '@/modules/stremio/stremio.service';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { positiveSafeId } from '@/utils/request-params';

@Controller('/meta')
export class MetaController {
  public constructor(
    private readonly stremioService: StremioService,
    private readonly providersTrendingService: ProvidersTrendingService,
  ) {}

  @Get('/:category/reflux:section.json')
  public async getMeta(
    @Param('category') category: string,
    @Param('section') section: string,
  ) {
    const type =
      this.providersTrendingService.convertStringToContentType(category);
    const id = positiveSafeId(section.slice(1));

    if (!type || id === null) {
      throw new BadRequestException();
    }

    return {
      meta: await this.stremioService.getMeta({ type, id }),
    };
  }
}
